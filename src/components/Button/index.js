import { Button, ButtonGroup } from "@chakra-ui/react";
import css from "./Button.module.css";

function NewButton() {
  return (
    <Button className={css.button} colorScheme="red">
      Click
    </Button>
  );
}

export default NewButton;
