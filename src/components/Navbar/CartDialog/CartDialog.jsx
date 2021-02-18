import React from "react";
import CartItem from "./CartItem/CartItem";

//redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//mui
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CartDialog = ({ open, handleClose }) => {
  const cart = useSelector((state) => state.data.cart);
  return (
    <Dialog
      TransitionComponent={Transition}
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Your CART</DialogTitle>
      <DialogContent>
        <List dense={true}>
          {cart.length ? (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <div>Your cart is empty, start by adding some guitars.</div>
          )}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default CartDialog;
