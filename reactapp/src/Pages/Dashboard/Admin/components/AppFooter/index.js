import {Typography} from "antd";
function AppFooter() {
    return <div className="AppFooter">
        <Typography.Link href="Telephone:9677808667">+919677808666</Typography.Link>
        <Typography.Link href="Email:harithaacse2000@gmail.com">harithaacse2000@gmail.com</Typography.Link>
        <Typography.Link href="https://www.google.com" target={"_blank"}>Privacy Policy</Typography.Link>
        <Typography.Link href="https://policies.google.com/terms?hl=en-IN&fg=1" target={"_blank"}>Terms of Use</Typography.Link>
    </div>;
}
export default AppFooter;