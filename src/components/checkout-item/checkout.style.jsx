import Styled from "styled-components";

export const CheckOutContainer = Styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
    & > .name,
    .quantity,
    .price {
      width: 23%;
    }

    & > .quantity {
      display: flex;
    }
      & > .arrow {
        cursor: pointer;
      }

      & > .value {
        margin: 0 10px;
      }
`;

export const ImageContainer = Styled.div`
      width: 23%;
      padding-right: 15px;
      &>img{
        width: 100%;
        height: 100%;
      }
`;
export const Remove = Styled.div`
       padding-left: 12px;
       cursor: pointer;
`;
// .checkout-item-container {

//     .image-container {

//       img {

//       }
//     }

//     }

//     .remove-button {

//     }
//   }
