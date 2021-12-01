import { useState, useMemo, useEffect } from "react";
const UseMemoDemo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: Number(price),
      },
    ]);
  };

  //   const total = products.reduce((result, item) => {
  //     console.log("Tính toán lại");
  //     return result + item.price;
  //   }, 0);

  const total = useMemo(() => {
    console.log("Tính toán lại");
    const result = products.reduce((result, item) => {
      return result + item.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        value={name}
        placeholder="Nhập tên"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Giá thành"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Thêm sản phẩm</button>
      <br />
      Total: {total}
      <ul>
        {products?.map((item, index) => (
          <li key={index}>
            {item?.name} - {item?.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoDemo;
