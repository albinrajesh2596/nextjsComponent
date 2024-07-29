import {Card} from 'antd'
import Link from 'next/link'
import './index.css'
import {LiaIndustrySolid} from 'react-icons/lia'
export default function ({jsonDatas}) {
  const {pathName, tilesData} = jsonDatas
  const {id ,...restData} = tilesData

  return (
    <Card className='card-tile' style={{minWidth: 230, margin: '5px'}}>
      <Link href={`/${pathName}/${tilesData.id}`}>
        <Card.Meta
          avatar={<LiaIndustrySolid style={{fontSize: '30px'}} />}
          description={
            <>
              {Object.entries(restData).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}: </strong> {value}
                </p>
              ))}
            </>
          }
        />
      </Link>
    </Card>
  )
}
