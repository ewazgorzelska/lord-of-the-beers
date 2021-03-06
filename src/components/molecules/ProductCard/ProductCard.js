import React, { useContext } from "react";
import Button from "components/atoms/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductCardContainer,
  ImageWrapper,
  ProductWrapper,
  ProductName,
  StyledButton,
  ButtonWrapper,
} from "./ProductCardStyles";
import { Link } from "react-router-dom";
import {
  addToCart,
  updateQuantityIncrementation,
  updateTotalPrice,
} from "store/index.js";
import { AppContext } from "context/AppContext";

const ProductCard = ({ id, name, image_url }) => {
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  const { handleCartPreview, isCartPreviewOpened } = useContext(AppContext);

  const productsInCart = useSelector((state) => state.productsInCart);

  const isProductInCart = (id) => {
    return productsInCart.filter((el) => el.id.toString() === id);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    isProductInCart(id).length === 0
      ? dispatch(
          addToCart({
            id,
            image: image_url,
            name,
            price: 1,
            quantityInCart: 1,
          })
        )
      : dispatch(updateQuantityIncrementation({ id }));
    dispatch2(updateTotalPrice(1));
    if (!isCartPreviewOpened) handleCartPreview();
  };

  return (
    <Link to={`/product/${id}`}>
      <ProductCardContainer>
        <ProductWrapper>
          <ProductName>{name}</ProductName>
          <ImageWrapper image_url={image_url} />
          <div>$ 1.00</div>
          <ButtonWrapper>
            <Button isBig onClick={handleAddToCart}>
              Add to cart
            </Button>
            <StyledButton isBig>Preview</StyledButton>
          </ButtonWrapper>
        </ProductWrapper>
      </ProductCardContainer>
    </Link>
  );
};

export default ProductCard;
