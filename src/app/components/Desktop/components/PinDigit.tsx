interface IPinDigitProps {
  focused: boolean;
  value: string;
}

const PinDigit: React.FC<IPinDigitProps> = (props: IPinDigitProps) => {
  const [hidden, setHiddenTo] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (props.value) {
      const timeout = setTimeout(() => {
        setHiddenTo(true);
      }, 500);

      return () => {
        setHiddenTo(false);

        clearTimeout(timeout);
      };
    }
  }, [props.value]);

  return (
    <div className={`desktop-pin-digit ${props.focused && 'focused'} ${hidden && 'hidden'}`}>
      <span className="desktop-pin-digit-value">{props.value || ''}</span>
    </div>
  );
};

export default PinDigit;
