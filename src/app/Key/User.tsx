import { PureComponent, ReactNode, useEffect, memo } from 'react';

interface UserProps {
  name: string;
}

// function User({ name }: UserProps) {
//   useEffect(() => {
//     console.log('DID MOUNT', name);

//     return () => {
//       console.log('WILL UNMOUNT', name);
//     };
//   }, [name]);

//   return <span>{name}</span>;
// }

// export default memo(User);

export default class User extends PureComponent<UserProps, {}> {
  componentDidMount(): void {
    console.log('DID MOUNT', this.props.name);
  }

  componentDidUpdate(
    prevProps: Readonly<UserProps>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log('DID UPDATE', prevProps.name, '->', this.props.name);
  }

  componentWillUnmount(): void {
    console.log('WILL UNMOUNT', this.props.name);
  }

  render(): ReactNode {
    return <span>{this.props.name}</span>;
  }
}
