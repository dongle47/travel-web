import React from "react";

import { Input, Space, Typography, AutoComplete } from "antd";
import Icon, {
  ClockCircleOutlined,
  EnvironmentOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { IconBaseProps } from "@ant-design/icons/lib/components/Icon";
import { Item } from "rc-menu";

const { Search } = Input;

const { Title, Text } = Typography;

const searchData = [
  {
    icon: <ClockCircleOutlined className="fs-5 text-secondary" />,
    title: "Tên địa điểm",
  },
  {
    icon: <EnvironmentOutlined className="fs-5 text-secondary" />,
    title: "Tên địa điểm",
  },
  {
    icon: <SearchOutlined className="fs-5 text-secondary" />,
    title: "Tên địa điểm",
  },
];

const renderItem = (title: string, icon: any) => ({
  value: title,
  label: (
    <Space style={{}} className="" size={10}>
      {icon}
      <Text className="text-secondary">{title}</Text>
    </Space>
  ),
});

const SearchBar: React.FC = () => {
  const onSearch = (value: string) => console.log(value);

  const options = searchData.map((item) => renderItem(item.title, item.icon));

  return (
    <div style={{}} className="bg-white search-bar rounded">
      <AutoComplete
        style={{ width: 250 }}
        popupClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={305}
        options={options}
      >
        <Search
          style={{ width: 305 }}
          addonBefore={<MenuOutlined />}
          placeholder="Tìm kiếm"
          allowClear
          onSearch={onSearch}
        />
      </AutoComplete>
    </div>
  );
};

export default SearchBar;
