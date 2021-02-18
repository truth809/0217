import React from 'react'
import { Descriptions, Button } from 'antd';

function ProductInfo(props) {

    const clickHandler = () => {

        // 필요한 정보를 cart 필드에다가 넣어 준다.
        
        
    }
    
    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price">{props.detail.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
            </Descriptions>
            <br />
            <br />
            <br />
            <div style={{ display:'flex', justifyContent:'center' }}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    Add to Cart
                </Button>

            </div>
        </div>
    )
}

export default ProductInfo
