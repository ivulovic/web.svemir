import useCatImplementation from '@implementation/cat';

const useHomeController = () => {
  const cat = useCatImplementation();

  return {
    implementation: {
      cat,
    },
    // settings: controller settings
  };
};

export default useHomeController;
