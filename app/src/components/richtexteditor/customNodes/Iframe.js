import { Mark, Plugin } from 'tiptap'
import { updateMark, removeMark, pasteRule } from 'tiptap-commands'
import { getMarkAttrs } from 'tiptap-utils'

export default class Iframe extends Mark {

  get name() {
    return 'iframe'
  }

  get schema() {
    return {
      attrs: {
        src: {
          default: null,
        },
      },
      inclusive: false,
      parseDOM: [
        {
          tag: 'iframe[src]',
          getAttrs: dom => ({
            src: dom.getAttribute('src'),
          }),
        },
      ],
      toDOM: node => ['iframe', {
        ...node.attrs,
        id:"ytplayer",
        type:"text/html",
        width: '100%',
        height: '-webkit-fill-available',
        frameborder: 0,
      }, 0],
    }
  }

  commands({ type }) {
    return attrs => {
      if (attrs.src) {
        return updateMark(type, attrs)
      }

      return removeMark(type)
    }
  }

  pasteRules({ type }) {
    return [
      pasteRule(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-zA-Z]{2,}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        type,
        url => ({ src: `${url.replace(".com/watch?v=",".com/embed/").replace("https","http")}?autoplay=1&origin=http://example.com`}),
      )
    ];
  }

  get plugins() {
    return [
      new Plugin({
        props: {
          handleClick: (view, pos, event) => {
            const { schema } = view.state
            const attrs = getMarkAttrs(view.state, schema.marks.link)

            if (attrs.src && event.target instanceof HTMLAnchorElement) {
              event.stopPropagation()
              window.open(attrs.src)
            }
          },
        },
      }),
    ]
  }

}
