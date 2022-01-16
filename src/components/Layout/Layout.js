import Aux from "../../hoc/ReactAux";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Aux>
      <div>Toollbar, SideDrawer, Backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
