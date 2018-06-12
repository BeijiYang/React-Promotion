demo-01

- 通过帖子 id 过滤，返回修改后的 posts 对象
  - let newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
    - 先加再赋值
- React 组件中对定时器 settimeout 的处理
