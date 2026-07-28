import React, { useEffect } from 'react';

const HEAD_TAGS = ['title', 'meta', 'link', 'script', 'style', 'base', 'noscript'];

function serializeKey(children) {
  return React.Children.toArray(children)
    .map((node) => {
      if (!React.isValidElement(node)) return String(node);
      const tag = typeof node.type === 'string' ? node.type : 'cmp';
      return `${tag}:${JSON.stringify(node.props || {})}`;
    })
    .join('||');
}

/**
 * Lightweight Helmet replacement (no provider required).
 * Renders title/meta/link/script tags into document.head and cleans up on unmount.
 */
export function Helmet({ children }) {
  const key = serializeKey(children);
  useEffect(() => {
    const inserted = [];
    React.Children.toArray(children).forEach((node) => {
      if (!React.isValidElement(node)) return;
      const tag = node.type;
      if (typeof tag !== 'string' || !HEAD_TAGS.includes(tag)) return;

      const props = node.props || {};
      const el = document.createElement(tag);

      Object.entries(props).forEach(([k, v]) => {
        if (k === 'children' || k === 'dangerouslySetInnerHTML') return;
        if (v == null || v === false) return;
        el.setAttribute(k, v === true ? '' : String(v));
      });

      let text = '';
      if (props.children != null) text = String(props.children);
      else if (props.dangerouslySetInnerHTML?.__html != null) text = props.dangerouslySetInnerHTML.__html;
      if (text) el.textContent = text;

      document.head.appendChild(el);
      inserted.push(el);

      if (tag === 'title' && text) document.title = text;
    });

    return () => {
      inserted.forEach((el) => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
    };
  }, [key]);

  return null;
}

export function HelmetProvider({ children }) {
  return children;
}

export default Helmet;