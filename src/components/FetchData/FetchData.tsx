import { AxiosResponse } from "axios";
import Repository from "../../api/Repository";
import { TechnologyData } from "../../shared/types";

const FetchData = (
  response: React.Dispatch<React.SetStateAction<TechnologyData[]>>
) => {
  return Repository.getAll().then(
    (data: AxiosResponse<TechnologyData[]>) => {
      response(data.data);
    },
    (error) => {
      console.log(error);
    }
  );
};

export default FetchData;
