import Button from "../../components/common/Button";
import { styled } from "styled-components";

const LocationFormPage = () => {
  return (
    <FormLayout>
      <Button />
      안녕하에쇼
    </FormLayout>
  );
};

export const FormLayout = styled.div`
  padding: 0px 20px 58px 20px;
  height: calc(100vh - 58px);
  width: 100%;
  background-color: gray;
`;

export default LocationFormPage;
