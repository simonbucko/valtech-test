import React from "react";

//redux
import { useSelector } from "react-redux";
//mui
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductDetails = ({ open, handleClose, product }) => {
  const cart = useSelector((state) => state.data.cart);
  return (
    <Dialog
      TransitionComponent={Transition}
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        {product.text.subheadline} - {product.name}
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid
            item
            sm={6}
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={`https://github.com/simonbucko/valtech-test/blob/main/src/assets/images/${product.image.file}?raw=true`}
              alt={product.name}
              height={product.image.height}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={`https://github.com/simonbucko/valtech-test/blob/main/src/assets/images/${product.manufacturerData.image.file}?raw=true`}
                alt={product.name}
                height={50}
              />
            </div>
            <div>
              <Typography variant="h5" style={{ marginTop: "8px" }}>
                Desription:
              </Typography>
              <Typography
                variant="body1"
                style={{ padding: "10px 5px 10px 0" }}
              >
                {product.text.cleanText}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetails;
