import Aux from "../../hoc/ReactAux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
