import { FormProvider, useForm } from 'react-hook-form';

const FormWrapper = ({
  className = '',
  onSubmit,
  children,
  showLoader,
  buttonText = 'Submit',
}: {
  className?: string;
  onSubmit: (data: any) => void;
  children: React.ReactNode;
  showLoader: boolean;
  buttonText?: string;
}) => {
  const methods = useForm();
  const { handleSubmit, setError, setFocus } = methods;

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
        <div className="pt-1"></div>
        <Button text={buttonText} showLoader={showLoader} />
      </form>
    </FormProvider>
  );
};

export const Button = ({
  text,
  showLoader = false,
}: {
  text: string;
  showLoader?: boolean;
}) => (
  <button
    className="rounded-md text-white font-bold py-3 w-full bg-primary hover:bg-primary-light min-w-[150px] flex items-center justify-center"
    type="submit"
  >
    {showLoader ? <Spinner /> : text}
  </button>
);

const Spinner = () => (
  <div className="h-6 w-6 border-[4px] border-white border-solid border-t-white/30 rounded-full animate-spin"></div>
);

export default FormWrapper;
