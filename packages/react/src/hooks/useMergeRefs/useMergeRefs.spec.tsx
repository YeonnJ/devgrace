import { useRef, useState } from 'react';
import { useMergeRefs } from '.';
import { fireEvent, render, screen } from '@testing-library/react';

const TestComponent = () => {
  const [result, setResult] = useState(false);
  const [ref3Element, setRef3Element] = useState<HTMLDivElement | null>(null);

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = (element: HTMLDivElement) => setRef3Element(element);

  const checkSameRefs = () => {
    if (ref1.current === ref2.current && ref1.current === ref3Element) {
      setResult(true);
    }
  };

  return (
    <>
      <div ref={useMergeRefs(ref1, ref2, ref3)} />
      <button onClick={checkSameRefs}>button</button>
      <p role={'paragraph'}>{`${result}`}</p>
    </>
  );
};

describe('useMergeRefs', () => {
  it('can merge multiple refs into one', () => {
    render(<TestComponent />);

    const button = screen.getByText('button');

    expect(screen.getByRole('paragraph')).toHaveTextContent('false');

    fireEvent.click(button);

    expect(screen.getByRole('paragraph')).toHaveTextContent('true');
  });
});
