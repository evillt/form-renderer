import store from './store'
import Item from './item'

export default {
  name: 'FormRender',

  render(h) {
    const {
      $FormRenderUI: { form: Form }
    } = this
    const { props, items = [] } = this.config

    return (
      <Form.component {...{ props }}>
        {items.map(item => {
          return <Item item={item} />
        })}
        {this.$slots.default}
      </Form.component>
    )
  },

  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      store
    }
  }
}
