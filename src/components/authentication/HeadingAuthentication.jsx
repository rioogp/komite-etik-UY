import Heading from "../Heading";
import LinkRoute from "../LinkRoute";

function HeadingAuthentication({ title, margin, type }) {
  return (
    <>
      <Heading type="secondary">Kode Etik</Heading>
      <Heading type="secondary">Universitas Yarsi</Heading>
      <span className={`${margin} text-sm`}>
        You can reach us anytime via&nbsp;
        <LinkRoute type="primary">yarsi.ac.id</LinkRoute>
      </span>
      <Heading type={type}>{title}</Heading>
    </>
  );
}

export default HeadingAuthentication;
