import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div>
      <div className="text-center mt-12 md:mt-48">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    </div>
  );
};

export default Loading;
