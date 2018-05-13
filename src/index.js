import Index from './components/index'

// layout
import Row from './components/layout-row'
import Col from './components/layout-col'

// import IndexItem from './components/index-item'
//
// import QrcodeItem from './components/qrcode-item'//二维码
// import DialogItem from './components/dialog-item'//弹窗
// import PaginationItem from './components/pagination-item'//分页
//
// import Form from './components/form'
// import FormItem from './components/form-item'
// import FormItemText from './components/form-item-text'
// import FormItemCheckbox from './components/form-item-checkbox'
// import FormItemSwitch from './components/form-item-switch'
// import FormItemNumber from './components/form-item-number'
// import FormItemTextarea from './components/form-item-textarea'
// import FormItemHidden from './components/form-item-hidden'
// import FormItemPassword from './components/form-item-password'
// import FormItemTags from './components/form-item-tags'
// import FormItemPicture from './components/form-item-picture'
// import FormItemFile from './components/form-item-file'
// import FormItemSelect from './components/form-item-select'
// import FFormItemHtml from './components/form-item-html'
// import FormItemSteps from './components/form-item-steps'
// import FormItemScrollbar from './components/form-item-scrollbar'
// import FormItemAlert from './components/form-item-alert'
// import FormItemRadio from './components/form-item-radio'
// import FormItemLink from './components/form-item-link'
// import FormItemTree from './components/form-item-tree'
//
// import Table from './components/table'
// import TableItem from './components/table-item'
// import TableItemState from './components/table-item-statu'
// import TableItemScope from './components/table-item-scope'
// import TableItemButton from './components/table-item-button'
// import TableItemSearch from './components/table-item-search'
// import TableItemIcon from './components/table-item-icon'
// import TableItemPicture from './components/table-item-picture'
// import TableItemTags from './components/table-item-tags'

import Vue from 'vue'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)

const components = [
  Index,

  Row,
  Col,
  // IndexItem,
  //
  // QrcodeItem,
  // DialogItem,
  // PaginationItem,
  //
  // Form,
  // FormItem,
  // FormItemText,
  // FormItemCheckbox,
  // FormItemSwitch,
  // FormItemNumber,
  // FormItemTextarea,
  // FormItemHidden,
  // FormItemPassword,
  // FormItemTags,
  // FormItemPicture,
  // FormItemFile,
  // FormItemSelect,
  // FFormItemHtml,
  // FormItemSteps,
  // FormItemScrollbar,
  // FormItemAlert,
  // FormItemRadio,
  // FormItemLink,
  // FormItemTree,
  //
  // Table,
  // TableItem,
  // TableItemState,
  // TableItemScope,
  // TableItemButton,
  // TableItemSearch,
  // TableItemIcon,
  // TableItemPicture,
  // TableItemTags,
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default install
