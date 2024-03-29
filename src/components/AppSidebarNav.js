import { h, resolveComponent } from 'vue'
import nav from '@/_nav.js'

function renderNav(nav) {
  return nav.map((item) => {
    // div
    if (item.component === 'div')
      return h('div', { class: item.className || '' }, item.name)

    const Component = resolveComponent(item.component)
    const children = []

    if (item.items) {
      // sub-menu
      const subItems = renderNav(item.items)
      children.push(...subItems)
      return h(Component, { index: item.to }, {
        default: () => children,
        title: () => [h('div', [item.icon ? h(resolveComponent(item.icon), { size: 20 }) : null, h('span', item.name)])],
      })
    }
    else {
      // menu-item
      children.push(h('div', [item.icon ? h(resolveComponent(item.icon), { size: 20 }) : null, h('span', item.name)]))
      if (item.badge) {
        const Badge = resolveComponent('ElTag')
        children.push(h(Badge, { type: item.badge.color, round: true }, () => item.badge.text))
      }

      return h(Component, {
        index: item.to,
        class: item.className || '',
      }, () => [
        ...children,
      ])
    }
  })
}

export default {
  name: 'AppSidebarNav',
  setup: () => {
    return () => h(resolveComponent('ElMenu'), {
      router: true,
      defaultActive: window.location.pathname.replace(import.meta.env.BASE_URL, ''),
    }, () => renderNav(nav))
  },
}
