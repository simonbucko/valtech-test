import React from "react";

//mui
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

//redux
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../../redux/actions/data";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          variant="square"
          src={`https://github.com/simonbucko/valtech-test/blob/main/src/assets/images/${item.image.file}?raw=true`}
        >
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.name} secondary={item.manufacturer} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={handleRemoveFromCart}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CartItem;
