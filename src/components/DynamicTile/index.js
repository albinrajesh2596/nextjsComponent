const defaultAvatarUrl = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
import {Card, Avatar} from 'antd'
import Link from 'next/link'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
export default function({ jsonData }) {
  const { icon, pathName, tilesData } = jsonData;
  const { id, oee, availability, performance, quality, name } = tilesData;
  const actions = [<EditOutlined key="edit" />, <SettingOutlined key="setting" />, <EllipsisOutlined key="ellipsis" />];

  return (
    <Card
      actions={actions}
      className="card-tile"
      style={{ minWidth: 230, margin: '5px' }}
    >
      <Link href={`/${pathName}/${id}`}>
        <Card.Meta
          avatar={<Avatar src={icon || defaultAvatarUrl} />}
          title={name}
          description={
            <>
              <p>OEE: {oee}%</p>
              <p>Availability: {availability}%</p>
              <p>Performance: {performance}%</p>
              <p>Quality: {quality}%</p>
            </>
          }
        />
      </Link>
    </Card>
  );
}
