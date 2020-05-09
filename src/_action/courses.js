import { API } from "../config/api";

export const Course = () => {
  return {
    type: "GET_COURSE",
    payload: async () => {
      const queery = `{
        courses {
          id
          title
          cover
          description
        }
      }`;
      const value = {
        query: queery,
      };
      const res = await API(value);
      const { data } = res.data.courses;
      return data;
    },
  };
};

export const Search = (search) => {
  return {
    type: "SEARCH_COURSE",
    payload: async () => {
      const queery = `{
                courses(
                    where : { title_contains: ${search}}
                ){
                    id
                    title
                    cover
                    description 
                }

            }`;
    },
  };
};
