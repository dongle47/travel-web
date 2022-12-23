import React from "react";

import { Input, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Search } = Input;

const SearchBar: React.FC = () => {
  const onSearch = (value: string) => console.log(value);

  return (
    <div style={{}} className="bg-white search-bar rounded">
      <Search
        style={{ width: 304 }}
        addonBefore={<MenuOutlined />}
        placeholder="Tìm kiếm"
        allowClear
        onSearch={onSearch}
      />
    </div>
  );
};

export default SearchBar;
