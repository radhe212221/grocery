import * as React from "react"

const CartIcon = (props) => (
  <svg
    width={29}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.645 16.487h14.508a.8.8 0 0 0 .77-.58l3.2-11.2a.8.8 0 0 0-.77-1.02H7.8l-.572-2.573a.8.8 0 0 0-.781-.627h-4.8a.8.8 0 1 0 0 1.6h4.158l2.888 12.998a2.403 2.403 0 0 0-1.446 2.202c0 1.323 1.076 2.4 2.4 2.4h14.506a.8.8 0 1 0 0-1.6H9.647a.801.801 0 0 1-.002-1.6Zm16.648-11.2-2.743 9.6H10.288l-2.133-9.6h18.138ZM8.847 22.087c0 1.323 1.076 2.4 2.4 2.4 1.323 0 2.4-1.077 2.4-2.4s-1.077-2.4-2.4-2.4a2.403 2.403 0 0 0-2.4 2.4Zm2.4-.8a.801.801 0 0 1 0 1.6.801.801 0 0 1 0-1.6ZM20.153 22.087c0 1.323 1.077 2.4 2.4 2.4 1.324 0 2.4-1.077 2.4-2.4s-1.076-2.4-2.4-2.4a2.403 2.403 0 0 0-2.4 2.4Zm2.4-.8a.8.8 0 0 1 0 1.6.801.801 0 0 1 0-1.6Z"
      fill={props?.active ? "green" : "#828282"}
    />
  </svg>
)

export default CartIcon