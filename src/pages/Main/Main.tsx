import "./Main.scss";
import Visual from "../../components/modules/Visual/Visual";
import ForWhat from "../../components/modules/ForWhat/ForWhat";
import { Divider } from "antd";
import RequestForm from "../../components/modules/RequestForm/RequestForm";
import PreFooter from "../../components/UI/PreFooter/PreFooter";

export default function Main() {
  return (
    <main className="main">
      <Visual />
      <Divider />
      <ForWhat />
      <Divider />
      <RequestForm />
      <Divider />
      <PreFooter />
    </main>
  );
}
