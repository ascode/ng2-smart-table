import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges, ElementRef } from '@angular/core';

import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { Row } from './lib/data-set/row';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';


@Component({
    selector: 'ng2-first-table',
    styleUrls: ['./ng2-first-table.component.scss'],
    templateUrl: './ng2-first-table.component.html',
})
export class Ng2FirstTableComponent implements OnChanges {

    @Input() source: any;
    @Input() settings: Object = {};

    @Output() rowSelect = new EventEmitter<any>();
    @Output() userRowSelect = new EventEmitter<any>();
    // 自定义单元行 双击事件
    @Output() dbSelect = new EventEmitter<any>();
    // 自定义工具栏 新增事件
    @Output() toolAdd = new EventEmitter<any>();
    // 自定义工具栏 编辑事件
    @Output() toolEdit = new EventEmitter<any>();
    // 自定义工具栏 删除事件
    @Output() toolDelete = new EventEmitter<any>();


    @Output() delete = new EventEmitter<any>();
    @Output() edit = new EventEmitter<any>();
    @Output() create = new EventEmitter<any>();
    @Output() custom = new EventEmitter<any>();
    @Output() deleteConfirm = new EventEmitter<any>();
    @Output() editConfirm = new EventEmitter<any>();
    @Output() createConfirm = new EventEmitter<any>();
    // @Output() rowHover: EventEmitter<any> = new EventEmitter<any>();

    tableClass: string;
    tableId: string;
    isHideHeader: boolean;
    isHideSubHeader: boolean;
    isPagerDisplay: boolean;
    rowClassFunction: Function;
    // 自定义隔行换色
    rowBgc: object;
    // 自定义当前点击的背景色
    clickBgc: object;
    // 自定义工具栏是否显示
    tool: boolean;
    // 自定义工具栏小计
    trToolSubtotalIsShow = false;
    trtoolSubtotalArr: any = [];
    trSubtotalData: any = [];
    // 自定义工具栏总计
    trToolTotalIsShow = false;
    trToolTotalData: any = [];
    newObj: any;



    grid: Grid;
    defaultSettings: Object = {
        mode: 'inline', // inline|external|click-to-edit
        selectMode: 'single', // single|multi|'dblclick'|'allEvent'
        // 单击 是否多选
        danjiIsMultion: false,
        hideHeader: false,
        hideSubHeader: false,
        actions: {
            columnTitle: 'Actions',
            add: true,
            edit: true,
            delete: true,
            custom: [],
            position: 'left', // left|right
        },
        filter: {
            inputClass: '',
        },
        edit: {
            inputClass: '',
            editButtonContent: '编辑',
            saveButtonContent: '确定',
            cancelButtonContent: '取消',
            confirmSave: false,
        },
        add: {
            inputClass: '',
            addButtonContent: '新增',
            createButtonContent: '确定',
            cancelButtonContent: '取消',
            confirmCreate: false,
        },
        delete: {
            deleteButtonContent: '删除',
            confirmDelete: false,
        },
        attr: {
            id: '',
            class: '',
        },
        noDataMessage: 'No data found',
        columns: {},
        pager: {
            display: true,
            perPage: 10,
        },
        rowClassFunction: () => "",

        // 自定义隔行换色
        rowBgc: {
            isShow: false,
            oddBgc: 'red',
            evenBgc: 'blue',
        },

        // 自定义当前点击的背景色
        clickBgc: {
            isShow: false,
            bgc: '#22a9b6',
        },

        // 自定义工具栏
        toolData: {
            isShow: false,
            isSummaryShow: false,
            toolAdd: {
                isShow: false,
                liClass: '',
                toolAddContent: '新增',
                confirmAdd: false,
            },
            toolDelete: {
                isShow: false,
                liClass: '',
                toolDeleteContent: '删除',
                confirmDelete: false,
            },
            toolEdit: {
                isShow: false,
                liClass: '',
                toolEditContent: '编辑',
                confirmEdit: false,
            },
            toolSubtotal: {
                isShow: false,
                liClass: '',
                toolSubtotalContent: '小计',
            },
            toolTotal: {
                isShow: false,
                liClass: '',
                toolTotalContent: '总计',
            },
            toolSummary: {
                isShow: false,
                liClass: '',
                toolSummaryContent: ['小计', '总计', '平均', '最大值', '最小值'],
            },
        },
    };

    isAllSelected: boolean = false;
    
    constructor( public el: ElementRef ) {
       
    }
    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
            }
        } else {
            this.initGrid();
        }
        this.tableId = this.grid.getSetting('attr.id');
        this.tableClass = this.grid.getSetting('attr.class');
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction');

        // 自定义隔行换色
        this.rowBgc = this.grid.getSetting('rowBgc');
        // 自定义当前点击的背景色
        this.clickBgc = this.grid.getSetting('clickBgc');
        // 自定义工具栏
        this.tool = this.grid.getSetting('toolData').isShow;
        this.grid.dataSet['columns'].forEach(el => {
            this.trtoolSubtotalArr.push(el.id);
        })
    }

    editRowSelect(row: Row) {
        if (this.grid.getSetting('selectMode') === 'multi' || this.grid.getSetting('selectMode') === 'allEvent') {
            this.onMultipleSelectRow(row);
        } else {
            this.onSelectRow(row);
        }
    }


    onUserSelectRow(row: Row) {

        if (this.grid.getSetting('selectMode') === 'single' || this.grid.getSetting('selectMode') === 'allEvent') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
        // 小计需要用到的数据
        this.trSubtotalData = this.grid.getSelectedRows();
    }
    // 自定义单元行 双击事件
    ondblclick(row: Row) {
        if (this.grid.getSetting('selectMode') === 'dblclick' || this.grid.getSetting('selectMode') === 'allEvent') {
            this.grid.selectRow(row);
            this.emitDblSelectRow(row);
        }
    }
    // 自定义工具栏 新增事件
    onToolAdd() {
        this.toolAdd.emit();
    }

    // 自定义工具栏 编辑事件
    onToolEdit(event: any) {
        this.toolEdit.emit();
    }

    // 自定义工具栏 删除事件
    onToolDelete(event: any) {
        this.toolDelete.emit();
    }

    // 自定义工具栏 小计
    onToolSubtotal(event: any) {
        this.trToolSubtotalIsShow = event.target.checked;
        setTimeout(() => {
            let selectArr = [];
            let needChaTr = this.el.nativeElement.querySelector('.subtotal');
            this.trSubtotalData.forEach( (el:any) => {
                selectArr.push(el.index);
            });
            console.info(selectArr);
        },100)    
    }

    // 自定义工具栏 总计
    onToolTotal(event: any) {
        this.trToolTotalIsShow = event.target.checked;
        this.trToolTotalData = this.huizong(this.trtoolSubtotalArr.concat([]), this.grid.dataSet['rows']);
    }

    multipleSelectRow(event: any) {
        event[0].stopPropagation();
        const row = event[1];
        if (this.grid.getSetting('selectMode') === 'multi' || this.grid.getSetting('selectMode') === 'allEvent') {
            this.grid.multipleSelectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
            this.emitDblSelectRow(row);
        }
    }

    onSelectAllRows($event: any) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
        this.emitDblSelectRow(null);
    }

    onSelectRow(row: Row) {

        this.grid.selectRow(row);
        this.emitSelectRow(row);

    }

    onMultipleSelectRow(row: Row) {
        this.emitSelectRow(row);
    }

    initGrid() {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe((row) => this.emitSelectRow(row));
    }

    prepareSource(): DataSource {
        if (this.source instanceof DataSource) {
            return this.source;
        } else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }

        return new LocalDataSource();
    }

    prepareSettings(): Object {
        return deepExtend({}, this.defaultSettings, this.settings);
    }

    changePage($event: any) {
        this.resetAllSelector();
    }

    sort($event: any) {
        this.resetAllSelector();
    }

    filter($event: any) {
        this.resetAllSelector();
    }

    private resetAllSelector() {
        this.isAllSelected = false;
    }

    private emitUserSelectRow(row: Row) {
        const selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r: Row) => r.getData()) : [],
        });
    }

    private emitSelectRow(row: Row) {
        const selectedRows = this.grid.getSelectedRows();
        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r: Row) => r.getData()) : [],
        });
    }

    private emitDblSelectRow(row: Row) {
        const selectedRows = this.grid.getSelectedRows();
        this.dbSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r: Row) => r.getData()) : [],
        });
    }

    // 汇总方法
    huizong(data: any, needData: any): any {
        let begData = data.concat([]),
            endData = data.concat([]);
        this.newObj = {};
        begData.forEach((el: any, i: any) => {
            this.newObj[el] = [];
            needData.forEach((el1: any) => {
                if (el !== 'id' && !isNaN(el1.data[el] * 1)) {
                    this.newObj[el].push(el1.data[el] * 1);
                }
            });
            this.newObj[el] = eval(this.newObj[el].join("+"));
        });
        endData.forEach((el: any, i: any) => {
            if (this.newObj[el] !== undefined) {
                endData[i] = this.newObj[el];
            } else {
                endData[i] = '';
            }
        });
        return endData;
    };
}
