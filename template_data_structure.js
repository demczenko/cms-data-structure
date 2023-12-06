[
  {
    template_name: "Monday",
    template_html:
      '                  <tr>\n                    <td ${product.align === \'center\' ? \'style="padding-bottom: 15px"\' : ""} align=${product.align}>\n                        <span class="newsletterProductLowPrice" style="line-height: 0.8">${product.lowPrice} </span> \n                        <span class="newsletterProductHightPrice" style="line-height: 0.8">${product.highPrice}</span>\n                    </td>\n                  </tr>',
    id: "aa2a9bb1-73e7-4478-8302-3c3612ad61ed",
    template_json: {
      tag: "html",
      text: "",
      attributes: {},
      children: [
        { tag: "head", text: "", attributes: {}, children: [] },
        {
          tag: "body",
          text: "",
          attributes: {},
          children: [
            {
              tag: "span",
              text: "${product.lowPrice}",
              attributes: {
                class: "newsletterProductLowPrice",
                style: "line-height: 0.8",
              },
              children: [],
            },
            {
              tag: "span",
              text: "${product.highPrice}",
              attributes: {
                class: "newsletterProductHightPrice",
                style: "line-height: 0.8",
              },
              children: [],
            },
          ],
        },
      ],
    },
  },
];
