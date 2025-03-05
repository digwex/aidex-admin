export const removeAllFormatsPlugin: any = {
  name: 'removeAllFormats',
  display: 'command',
  title: 'Очистить форматирование',
  innerHTML:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.76"><g><path d="M13.69,17.2h6.46v1.31H8.56L4.41,14.37,14,4.75l6.06,6.06L16.89,14l-3.2,3.19Zm-4.61,0h2.77L14.09,15,9.88,10.75,6.25,14.38l1.41,1.41c.84.82,1.31,1.29,1.42,1.41Z" transform="translate(-4.41 -4.75)"></path></g></svg>',

  add: function (core: any, targetElement: any) {
    const context = core.context
    const rangeTag = core.util.createElement('div')

    core.util.addClass(rangeTag, '__se__format__range_custom')
    context.customCommand = {
      targetButton: targetElement,
      tag: rangeTag
    }
  },

  action: function () {
    this.nodeChange(null, null, null, null)
    const value = 'text'
    const className = ''
    let range = this.getRange()
    let selectedFormsts = this.getSelectedElementsAndComponents(false)

    if (selectedFormsts.length === 0) {
      range = this.getRange_addLine(range, null)
      selectedFormsts = this.getSelectedElementsAndComponents(false)
      if (selectedFormsts.length === 0) return
    }

    const startOffset = range.startOffset
    const endOffset = range.endOffset

    const util = this.util
    let first = selectedFormsts[0]
    let last = selectedFormsts[selectedFormsts.length - 1]
    const firstPath = util.getNodePath(range.startContainer, first, null, null)
    const lastPath = util.getNodePath(range.endContainer, last, null, null)

    const rlist = this.detachList(selectedFormsts, false)

    if (rlist.sc) first = rlist.sc
    if (rlist.ec) last = rlist.ec

    this.setRange(util.getNodeFromPath(firstPath, first), startOffset, util.getNodeFromPath(lastPath, last), endOffset)
    const modifiedFormsts = this.getSelectedElementsAndComponents(false)

    for (let i = 0, len = modifiedFormsts.length, node, newFormat; i < len; i++) {
      node = modifiedFormsts[i]

      if (
        (node.nodeName.toLowerCase() !== value.toLowerCase() ||
          (node.className.match(/(\s|^)__se__format__[^\s]+/) || [''])[0].trim() !== className) &&
        !util.isComponent(node)
      ) {
        newFormat = document.createElement('p')
        util.copyFormatAttributes(newFormat, node)
        newFormat.innerHTML = node.innerHTML

        node.parentNode.replaceChild(newFormat, node)
      }

      if (i === 0) first = newFormat || node
      if (i === len - 1) last = newFormat || node
      newFormat = null
    }

    this.setRange(util.getNodeFromPath(firstPath, first), startOffset, util.getNodeFromPath(lastPath, last), endOffset)
    this.history.push(false)
  }
}
