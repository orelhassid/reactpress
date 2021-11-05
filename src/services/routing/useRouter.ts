import {
  useRouter as useRouterNext,
  NextRouter,
} from "next/dist/client/router";

const useRouter = () => {
  const router: NextRouter = useRouterNext();

  return {
    router,
  };
};

export default useRouter;
