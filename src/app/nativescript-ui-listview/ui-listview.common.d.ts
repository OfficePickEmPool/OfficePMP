import * as viewModule from "tns-core-modules/ui/core/view";
import * as observableModule from "tns-core-modules/data/observable";
import * as stackLayoutModule from "tns-core-modules/ui/layouts/stack-layout";
import { View, KeyedTemplate } from "tns-core-modules/ui/core/view";
import { Color } from "tns-core-modules/color";
export declare const NG_VIEW = "ng_view";
export declare enum ListViewViewType {
    HeaderView = "HeaderView",
    ItemView = "ItemView",
    FooterView = "FooterView",
    GroupView = "GroupView",
    LoadOnDemandView = "LoadOnDemandView",
    ItemSwipeView = "ItemSwipeView"
}
export declare enum ListViewItemSnapMode {
    Auto = "Auto",
    Start = "Start",
    End = "End",
    Center = "Center"
}
export declare enum ListViewScrollDirection {
    Vertical = "Vertical",
    Horizontal = "Horizontal"
}
export declare enum ListViewScrollPosition {
    None = "None",
    Top = "Top",
    CenteredVertically = "CenteredVertically",
    CenteredHorizontally = "CenteredHorizontally",
    Bottom = "Bottom",
    Left = "Left",
    Right = "Right"
}
export declare enum ListViewReorderMode {
    HoldAndDrag = "HoldAndDrag",
    Drag = "Drag"
}
export declare enum ListViewItemAnimation {
    Default = "Default",
    Fade = "Fade",
    Scale = "Scale",
    Slide = "Slide"
}
export declare enum ListViewLoadOnDemandMode {
    None = "None",
    Manual = "Manual",
    Auto = "Auto"
}
export declare enum ListViewSelectionBehavior {
    None = "None",
    Press = "Press",
    LongPress = "LongPress"
}
export declare class PullToRefreshStyle extends viewModule.ViewBase {
    indicatorColor: Color;
    indicatorBackgroundColor: Color;
    _owner: RadListView;
    static indicatorColorProperty: viewModule.Property<PullToRefreshStyle, viewModule.Color>;
    static indicatorBackgroundColorProperty: viewModule.Property<PullToRefreshStyle, viewModule.Color>;
    protected onIndicatorColorPropertyChanged(oldValue: Color, newValue: Color): void;
    protected onIndicatorBackgroundColorPropertyChanged(oldValue: Color, newValue: Color): void;
}
export declare class ReorderHandle extends stackLayoutModule.StackLayout {
    constructor();
}
export declare class ListViewScrollEventData implements observableModule.EventData {
    private _eventName;
    private _object;
    private _scrollOffset;
    constructor();
    object: any;
    eventName: string;
    scrollOffset: number;
}
export declare class ListViewEventData implements observableModule.EventData {
    private _eventName;
    private _object;
    private _index;
    private _groupIndex;
    private _data;
    private _returnValue;
    private _view;
    private _android;
    private _ios;
    constructor();
    android: any;
    ios: any;
    eventName: string;
    object: any;
    index: number;
    groupIndex: number;
    data: any;
    returnValue: any;
    view: viewModule.View;
}
export declare class LoadOnDemandListViewEventData extends ListViewEventData {
}
export declare class SwipeActionsEventData extends ListViewEventData {
    private _swipeView;
    private _mainView;
    mainView: any;
    swipeView: any;
}
export declare class ListViewLayoutBase extends viewModule.ViewBase {
    scrollDirection: ListViewScrollDirection;
    itemInsertAnimation: ListViewItemAnimation;
    itemDeleteAnimation: ListViewItemAnimation;
    itemWidth: number;
    itemHeight: number;
    readonly android: any;
    readonly ios: any;
    static scrollDirectionProperty: viewModule.Property<ListViewLayoutBase, ListViewScrollDirection>;
    private onScrollDirectionPropertyChanged;
    protected onScrollDirectionChanged(oldValue: ListViewScrollDirection, newValue: ListViewScrollDirection): void;
    static itemInsertAnimationProperty: viewModule.Property<ListViewLayoutBase, ListViewItemAnimation>;
    private onItemInsertAnimationPropertyChanged;
    protected onItemInsertAnimationChanged(oldValue: ListViewItemAnimation, newValue: ListViewItemAnimation): void;
    static itemDeleteAnimationProperty: viewModule.Property<ListViewLayoutBase, ListViewItemAnimation>;
    private onItemDeleteAnimationPropertyChanged;
    protected onItemDeleteAnimationChanged(oldValue: ListViewItemAnimation, newValue: ListViewItemAnimation): void;
    static itemWidthProperty: viewModule.Property<ListViewLayoutBase, number>;
    private onItemWidthPropertyChanged;
    protected onItemWidthChanged(oldValue: number, newValue: number): void;
    static itemHeightProperty: viewModule.Property<ListViewLayoutBase, number>;
    private onItemHeightPropertyChanged;
    protected onItemHeightChanged(oldValue: number, newValue: number): void;
    _onOwnerUICreated(): void;
}
export declare class RadListView extends viewModule.ContainerView {
    static knownFunctions: string[];
    static scrolledEvent: string;
    static scrollDragEndedEvent: string;
    static scrollStartedEvent: string;
    static scrollEndedEvent: string;
    static itemSelectingEvent: string;
    static itemDeselectingEvent: string;
    static itemTapEvent: string;
    static itemHoldEvent: string;
    static itemSelectedEvent: string;
    static itemDeselectedEvent: string;
    static itemReorderStartingEvent: string;
    static itemReorderedEvent: string;
    static itemReorderStartedEvent: string;
    static itemSwipingEvent: string;
    static itemSwipeProgressChangedEvent: string;
    static itemSwipeProgressStartedEvent: string;
    static itemSwipeProgressEndedEvent: string;
    static loadMoreDataRequestedEvent: string;
    static pullToRefreshInitiatedEvent: string;
    static itemLoadingEvent: string;
    static itemLoadingInternalEvent: string;
    static dataPopulatedEvent: string;
    pullToRefreshStyle: PullToRefreshStyle;
    listViewLayout: ListViewLayoutBase;
    headerItemTemplate: string;
    _hasGroupingFunctionChanged: boolean;
    footerItemTemplate: string;
    itemTemplate: string;
    groupTemplate: string;
    itemTemplates: string | Array<KeyedTemplate>;
    itemTemplateSelector: ((item: any, index: number, items: any) => string) | string;
    itemSwipeTemplate: string;
    multipleSelection: boolean;
    itemReorder: boolean;
    itemSwipe: boolean;
    swipeActions: boolean;
    pullToRefresh: boolean;
    loadOnDemandMode: ListViewLoadOnDemandMode;
    loadOnDemandBufferSize: number;
    selectionBehavior: ListViewSelectionBehavior;
    items: any;
    scrollPosition: ListViewScrollPosition;
    reorderMode: ListViewReorderMode;
    loadOnDemandItemTemplate: string;
    enableCollapsibleGroups: boolean;
    groupingFunction: (item: any) => any;
    filteringFunction: (item: any) => boolean;
    sortingFunction: (item: any, otherItem: any) => number;
    _loadOnDemandModeInternal: ListViewLoadOnDemandMode;
    private _isEventListenerAttached;
    _defaultTemplate: KeyedTemplate;
    onLoaded(): void;
    private logWarningIfNeeded;
    onUnloaded(): void;
    _itemTemplatesInternal: viewModule.KeyedTemplate[];
    protected _dataUpdatesSuspended: boolean;
    private _itemViewLoader;
    private _itemViewDisposer;
    private _nativeScriptViewAdded;
    private _itemTemplateSelectorBindable;
    itemViewLoader: (viewType: any) => viewModule.View;
    itemViewDisposer: () => void;
    nativeScriptViewAdded: (parent: View, child: View) => void;
    readonly isDataOperationsEnabled: boolean;
    static groupingFunctionProperty: viewModule.Property<RadListView, (item: any) => any>;
    static filteringFunctionProperty: viewModule.Property<RadListView, (item: any) => boolean>;
    static sortingFunctionProperty: viewModule.Property<RadListView, (item: any, otherItem: any) => number>;
    static enableCollapsibleGroupsProperty: viewModule.Property<RadListView, boolean>;
    static pullToRefreshStyleProperty: viewModule.Property<RadListView, PullToRefreshStyle>;
    static headerItemTemplateProperty: viewModule.Property<RadListView, string>;
    static footerItemTemplateProperty: viewModule.Property<RadListView, string>;
    static reorderModeProperty: viewModule.Property<RadListView, ListViewReorderMode>;
    static listViewLayoutProperty: viewModule.Property<RadListView, ListViewLayoutBase>;
    static loadOnDemandItemTemplateProperty: viewModule.Property<RadListView, string>;
    static itemTemplateSelectorProperty: viewModule.Property<RadListView, string | ((item: any, index: number, items: any) => string)>;
    static itemTemplatesProperty: viewModule.Property<RadListView, string | viewModule.KeyedTemplate[]>;
    static itemTemplateProperty: viewModule.Property<RadListView, string>;
    static itemSwipeTemplateProperty: viewModule.Property<RadListView, string>;
    static groupTemplateProperty: viewModule.Property<RadListView, string>;
    static multipleSelectionProperty: viewModule.Property<RadListView, boolean>;
    static itemReorderProperty: viewModule.Property<RadListView, boolean>;
    static itemSwipeProperty: viewModule.Property<RadListView, boolean>;
    static swipeActionsProperty: viewModule.Property<RadListView, boolean>;
    static pullToRefreshProperty: viewModule.Property<RadListView, boolean>;
    static loadOnDemandModeProperty: viewModule.Property<RadListView, ListViewLoadOnDemandMode>;
    static loadOnDemandBufferSizeProperty: viewModule.Property<RadListView, number>;
    static selectionBehaviorProperty: viewModule.Property<RadListView, ListViewSelectionBehavior>;
    static itemsProperty: viewModule.Property<RadListView, any>;
    static scrollPositionProperty: viewModule.Property<RadListView, ListViewScrollPosition>;
    _reorderItemInSource(oldPosition: number, newPosition: number): void;
    suspendUpdates(): void;
    resumeUpdates(refresh: boolean): void;
    updatesSuspended(): boolean;
    getItemAtIndex(index: any): any;
    getIndexOf(item: any): any;
    selectItemAt(index: number): void;
    deselectItemAt(index: number): void;
    selectAll(): void;
    deselectAll(): void;
    isItemSelected(item: any): boolean;
    getSelectedItems(): any[];
    getViewForItem(item: any): viewModule.View;
    protected resolveTemplateView(template: string): View;
    getViewForViewType(viewType: any, templateKey?: string): View;
    private onGroupingFunctionPropertyChanged;
    private onFilteringFunctionPropertyChanged;
    private onSortingFunctionPropertyChanged;
    private onEnableCollapsibleGroupsPropertyChanged;
    private _getDefaultItemContent;
    private _getDefaultGroupContent;
    private getTemplateFromSelector;
    private onPullToRefreshStylePropertyChanged;
    private onHeaderItemTemplatePropertyChanged;
    private onFooterItemTemplatePropertyChanged;
    private onLoadOnDemandItemTemplatePropertyChanged;
    private onListViewReorderModePropertyChanged;
    private onLayoutPropertyChanged;
    private onItemTemplateSelectorPropertyChanged;
    private onItemTemplatesPropertyChanged;
    private onItemTemplatePropertyChanged;
    private onGroupTemplatePropertyChanged;
    private onItemSwipeTemplatePropertyChanged;
    private onMultipleSelectionPropertyChanged;
    private onItemReorderPropertyChanged;
    private onItemSwipePropertyChanged;
    private onSwipeActionsPropertyChanged;
    private onPullToRefreshPropertyChanged;
    private onLoadOnDemandModePropertyChanged;
    private onLoadOnDemandBufferSizePropertyChanged;
    private onSelectionBehaviorPropertyChanged;
    private onItemsPropertyChanged;
    private onScrollPositionPropertyChanged;
    protected onItemViewLoaderChanged(): void;
    protected onItemViewDisposerChanged(): void;
    protected onNativeScriptViewAddedChanged(): void;
    protected onGroupingFunctionChanged(oldValue: (item: any) => any, newValue: (item: any) => any): void;
    protected onFilteringFunctionChanged(oldValue: (item: any) => boolean, newValue: (item: any) => boolean): void;
    protected onSortingFunctionChanged(oldValue: (item: any, otherItem: any) => number, newValue: (item: any, otherItem: any) => number): void;
    protected onEnableCollapsibleGroupsChanged(oldValue: boolean, newValue: boolean): void;
    protected onPullToRefreshStyleChanged(oldValue: PullToRefreshStyle, newValue: PullToRefreshStyle): void;
    protected onHeaderItemTemplateChanged(oldValue: string, newValue: string): void;
    protected onFooterItemTemplateChanged(oldValue: string, newValue: string): void;
    protected onLoadOnDemandItemTemplateChanged(oldValue: string, newValue: string): void;
    protected onReorderModeChanged(oldValue: ListViewReorderMode, newValue: ListViewReorderMode): void;
    protected onListViewLayoutChanged(oldValue: ListViewLayoutBase, newValue: ListViewLayoutBase): void;
    protected onItemTemplateSelectorChanged(oldValue: string | ((item: any, index: number, items: any) => string), newValue: string | ((item: any, index: number, items: any) => string)): void;
    protected onItemTemplatesChanged(oldValue: string | Array<KeyedTemplate>, newValue: string | Array<KeyedTemplate>): void;
    protected onItemTemplateChanged(oldValue: string, newValue: string): void;
    protected onGroupTemplateChanged(oldValue: string, newValue: string): void;
    protected onItemSwipeTemplateChanged(oldValue: string, newValue: string): void;
    protected onMultipleSelectionChanged(oldValue: boolean, newValue: boolean): void;
    protected onItemReorderChanged(oldValue: boolean, newValue: boolean): void;
    protected onItemSwipeChanged(oldValue: boolean, newValue: boolean): void;
    protected onSwipeActionsChanged(oldValue: boolean, newValue: boolean): void;
    protected onPullToRefreshChanged(oldValue: boolean, newValue: boolean): void;
    protected onLoadOnDemandModeChanged(oldValue: ListViewLoadOnDemandMode, newValue: ListViewLoadOnDemandMode): void;
    protected onLoadOnDemandBufferSizeChanged(oldValue: number, newValue: number): void;
    protected onSelectionBehaviorChanged(oldValue: ListViewSelectionBehavior, newValue: ListViewSelectionBehavior): void;
    private onSourceCollectionChangedInternal;
    private onItemsChangedInternal;
    protected onItemsChanged(oldValue: any, newValue: any): void;
    protected onScrollPositionChanged(oldValue: ListViewScrollPosition, newValue: ListViewScrollPosition): void;
    protected clearEmbeddedViews(): void;
    protected onSourceCollectionChanged(data: any): void;
    refresh(): void;
    updateHeaderFooter(): void;
    getScrollOffset(): number;
    scrollToIndex(index: number, animate?: boolean, snapMode?: ListViewItemSnapMode): void;
    scrollWithAmount(amount: number, animate: boolean): void;
    notifyLoadOnDemandFinished(disableLoadOnDemand?: boolean): void;
    notifyPullToRefreshFinished(): void;
    notifySwipeToExecuteFinished(): void;
}
