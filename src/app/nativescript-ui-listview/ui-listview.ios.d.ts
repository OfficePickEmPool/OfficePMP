export * from "./ui-listview.common";
import * as viewModule from "tns-core-modules/ui/core/view";
import * as commonModule from "./ui-listview.common";
import { KeyedTemplate } from "tns-core-modules/ui/core/view";
import { PropertyChangeData } from "tns-core-modules/data/observable";
export declare namespace knownTemplates {
    let itemTemplate: string;
    let itemSwipeTemplate: string;
    let loadOnDemandItemTemplate: string;
    let headerItemTemplate: string;
    let footerItemTemplate: string;
    let groupTemplate: string;
}
export declare namespace knownMultiTemplates {
    const itemTemplates = "itemTemplates";
}
export declare class ReorderHandle extends commonModule.ReorderHandle {
    constructor();
}
export declare class ListViewLayoutBase extends commonModule.ListViewLayoutBase {
    private _ios;
    protected _owner: WeakRef<RadListView>;
    readonly ios: any;
    protected supportsDynamicSize(): boolean;
    init(owner: WeakRef<RadListView>): void;
    reset(): void;
    protected getNativeLayout(): any;
    protected onScrollDirectionChanged(oldValue: commonModule.ListViewScrollDirection, newValue: commonModule.ListViewScrollDirection): void;
    private syncOwnerScrollDirection;
    protected onItemInsertAnimationChanged(oldValue: commonModule.ListViewItemAnimation, newValue: commonModule.ListViewItemAnimation): void;
    protected onItemDeleteAnimationChanged(oldValue: commonModule.ListViewItemAnimation, newValue: commonModule.ListViewItemAnimation): void;
    protected onItemWidthChanged(oldValue: number, newValue: number): void;
    protected onItemHeightChanged(oldValue: number, newValue: number): void;
    private updateIsDynamicSize;
    protected updateItemSize(): void;
}
export declare class ListViewLinearLayout extends ListViewLayoutBase {
    protected getNativeLayout(): TKListViewLinearLayout;
}
export declare class ListViewGridLayout extends ListViewLayoutBase {
    spanCount: number;
    lineSpacing: number;
    protected getNativeLayout(): TKListViewGridLayout;
    protected supportsDynamicSize(): boolean;
    static spanCountProperty: viewModule.Property<ListViewGridLayout, number>;
    private onSpanCountPropertyChanged;
    protected onSpanCountChanged(oldValue: number, newValue: number): void;
    static lineSpacingProperty: viewModule.Property<ListViewGridLayout, number>;
    private onLineSpacingPropertyChanged;
    protected onLineSpacingChanged(oldValue: number, newValue: number): void;
}
export declare class ListViewStaggeredLayout extends ListViewGridLayout {
    protected getNativeLayout(): TKListViewStaggeredLayout;
    protected supportsDynamicSize(): boolean;
    protected updateItemSize(): void;
}
export declare class ExtendedLoadOnDemandCell extends TKListViewLoadOnDemandCell {
    private _view;
    static new(): ExtendedLoadOnDemandCell;
    static class(): any;
    systemLayoutSizeFittingSize(targetSize: any): CGSize;
    willMoveToSuperview(newSuperview: UIView): void;
    view: viewModule.View;
}
export declare class ExtendedListViewCell extends TKListViewCell {
    private touchStarted;
    static new(): ExtendedListViewCell;
    static class(): any;
    willMoveToSuperview(newSuperview: UIView): void;
    systemLayoutSizeFittingSize(targetSize: any): any;
    touchesBeganWithEvent(touches: NSSet<any>, event: any): void;
    touchesMovedWithEvent(touches: NSSet<any>, event: any): void;
    touchesEndedWithEvent(touches: NSSet<any>, event: any): void;
    getCurrentIndexPath(): NSIndexPath;
    private getIndexForIndexPath;
    myContentView: viewModule.View;
    myBackgroundView: viewModule.View;
    itemViewMeasuredSize: any;
    swipeViewMeasuredSize: any;
    view: any;
}
export declare class RadListView extends commonModule.RadListView {
    private _delegate;
    private _dataSource;
    private _heights;
    _realizedCells: Map<number, ExtendedListViewCell>;
    private _nextCellTag;
    private _isDataDirty;
    _preparingCell: any;
    _shouldDisableLoadOnDemand: boolean;
    _shouldReEnableLoadOnDemand: boolean;
    _insertingItemsWithAnimation: boolean;
    constructor();
    private reloadDataSource;
    createNativeView(): TKListView;
    initNativeView(): void;
    disposeNativeView(): void;
    private setHeightForCell;
    selectAll(): void;
    deselectAll(): void;
    isItemSelected(item: any): boolean;
    selectItemAt(index: number): void;
    deselectItemAt(index: number): void;
    getViewForItem(item: any): viewModule.View;
    getSelectedItems(): Array<any>;
    bindingContextChanged(data: PropertyChangeData): void;
    updateHeaderFooter(): void;
    protected onReorderModeChanged(oldValue: commonModule.ListViewReorderMode, newValue: commonModule.ListViewReorderMode): void;
    protected onListViewLayoutChanged(oldValue: ListViewLayoutBase, newValue: ListViewLayoutBase): void;
    protected onItemTemplateSelectorChanged(oldValue: string | ((item: any, index: number, items: any) => string), newValue: string | ((item: any, index: number, items: any) => string)): void;
    private syncListViewLayout;
    private clearRealizedCells;
    _removeContainer(cell: ExtendedListViewCell): void;
    private _clearCellViews;
    protected onItemTemplateChanged(oldValue: string, newValue: string): void;
    protected onGroupTemplateChanged(oldValue: string, newValue: string): void;
    protected onItemTemplatesChanged(oldValue: string | Array<KeyedTemplate>, newValue: string | Array<KeyedTemplate>): void;
    protected onLoadOnDemandItemTemplateChanged(oldValue: string, newValue: string): void;
    protected onItemSwipeTemplateChanged(oldValue: string, newValue: string): void;
    protected onMultipleSelectionChanged(oldValue: boolean, newValue: boolean): void;
    protected onHeaderItemTemplateChanged(oldValue: string, newValue: string): void;
    protected onFooterItemTemplateChanged(oldValue: string, newValue: string): void;
    protected onEnableCollapsibleGroupsChanged(oldValue: boolean, newValue: boolean): void;
    protected onGroupingFunctionChanged(oldValue: (item: any) => any, newValue: (item: any) => any): void;
    protected onFilteringFunctionChanged(oldValue: (item: any) => boolean, newValue: (item: any) => boolean): void;
    protected onSortingFunctionChanged(oldValue: (item: any, otherItem: any) => number, newValue: (item: any, otherItem: any) => number): void;
    private synchReorderMode;
    private isSwipeEnabled;
    private syncItemTemplates;
    private synchSelection;
    protected onItemReorderChanged(oldValue: boolean, newValue: boolean): void;
    private synchCellReorder;
    private clearCellsAndUpdateHeaderFooter;
    protected onItemSwipeChanged(oldValue: boolean, newValue: boolean): void;
    protected onSwipeActionsChanged(oldValue: boolean, newValue: boolean): void;
    private synchCellSwipe;
    protected onPullToRefreshChanged(oldValue: boolean, newValue: boolean): void;
    private synchPullToRefresh;
    protected onPullToRefreshStyleChanged(oldValue: commonModule.PullToRefreshStyle, newValue: commonModule.PullToRefreshStyle): void;
    protected onLoadOnDemandModeChanged(oldValue: commonModule.ListViewLoadOnDemandMode, newValue: commonModule.ListViewLoadOnDemandMode): void;
    private setLoadOnDemandModeInternal;
    private synchLoadOnDemandMode;
    protected onLoadOnDemandBufferSizeChanged(oldValue: number, newValue: number): void;
    private synchLoadOnDemandBufferSize;
    protected onSelectionBehaviorChanged(oldValue: commonModule.ListViewSelectionBehavior, newValue: commonModule.ListViewSelectionBehavior): void;
    private synchSelectionBehavior;
    private getDataItem;
    _getDataItemFromSection(index: number, section: number, isGroup?: boolean): any;
    prepareItem(item: viewModule.View, index: number, section?: number): void;
    prepareItemFromSection(item: viewModule.View, index: number, section: number): void;
    requestLayout(): void;
    private _currentWidthSpec;
    private _currentHeightSpec;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    readonly _childrenCount: number;
    eachChildView(callback: (child: viewModule.View) => boolean): void;
    onLoaded(): void;
    onUnloaded(): void;
    scrollWithAmount(amount: number, animate: boolean): void;
    getScrollOffset(): any;
    private resolveNativeSnapPosition;
    scrollToIndex(index: number, animate?: boolean, snapMode?: commonModule.ListViewItemSnapMode): void;
    private getItemIndexPath;
    notifyPullToRefreshFinished(enableLoadOnDemand?: boolean): void;
    notifyLoadOnDemandFinished(disableLoadOnDemand?: boolean): void;
    _disableLoadOnDemand(): void;
    _returnLoadOnDemandMode(): void;
    notifySwipeToExecuteFinished(): void;
    refresh(): void;
    protected onSourceCollectionChanged(data: any): void;
    protected onItemViewDisposerChanged(): void;
    protected onNativeScriptViewAddedChanged(): void;
    protected clearEmbeddedViews(): void;
    private unbindUnusedCells;
    private getLoadOnDemandItemTemplateContent;
    _getItemTemplateType(indexPath: NSIndexPath): string;
    private getItemTemplateContent;
    layoutHeaderFooterCell(cell: any): {
        measuredWidth: number;
        measuredHeight: number;
    };
    layoutLoadOnDemandCell(cell: ExtendedLoadOnDemandCell): {
        measuredWidth: number;
        measuredHeight: number;
    };
    layoutCell(cell: ExtendedListViewCell, indexPath: any): {
        measuredWidth: number;
        measuredHeight: number;
    };
    measureCell(cellView: viewModule.View, sizeRestriction?: any): {
        measuredWidth: number;
        measuredHeight: number;
    };
    private prepareCellTag;
    prepareLoadOnDemandCell(cell: ExtendedLoadOnDemandCell, indexPath: NSIndexPath): void;
    prepareHeaderCell(headerCell: TKListViewHeaderCell, indexPath: NSIndexPath): void;
    prepareFooterCell(footerCell: TKListViewFooterCell, indexPath: NSIndexPath): void;
    private prepareHeaderFooterCell;
    private getSupplementaryView;
    private updateHeaderFooterBindingContext;
    private getBindingContext;
    disableIosOverflowSafeArea(parentView: viewModule.View): void;
    prepareCell(tableCell: ExtendedListViewCell, indexPath: NSIndexPath, templateType: string, raiseItemLoadingEvent: boolean): void;
    getFirstVisiblePosition(): any;
}
