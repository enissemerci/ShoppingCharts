import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity.id;
  return (
    <div>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={imgUrl}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex align-items-baseline justify-content-between mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button className="w-100">+ add to cart</Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div className="d-flex align-items-center gap-2">
                  <Button>-</Button>
                  <div>
                    <span>{quantity} in cart</span>
                  </div>
                  <Button>+</Button>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  {" "}
                  <Button variant="danger" size="sm">
                    Remove
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
function useShoppingCart(): [any, any, any, any] {
  throw new Error("Function not implemented.");
}
