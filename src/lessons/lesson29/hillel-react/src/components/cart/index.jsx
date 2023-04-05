import React from 'react'
import { useSelector, connect } from 'react-redux';


// export default function Cart() {
// const cart = useSelector((state) => state.cart);

//   return (
//     <div className='cart'>
//     cart: {cart.length}
//   </div>
//   )
// }

function Cart({ cart, add, userId }) {
  // const cart = useSelector((state) => state.cart);
  
    return (
      <div onClick={() => add(5)} className='cart'>
      cart: {cart.length}
    </div>
    )
  }

  const mapStateToProps = (state) => ({
    cart: state.cart, 
  })

  const addAction = (payload) => ({
    type: 'add',
    payload,
  })

  const mapDispatchtoProps = (dispatch) => ({
    add: dispatch(addAction(1)),
  })

export default connect(mapStateToProps, mapDispatchtoProps, )(Cart);
