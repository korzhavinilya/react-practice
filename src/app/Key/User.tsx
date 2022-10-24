import { PureComponent, ReactNode, useEffect, memo, useState } from 'react';

interface UserProps {
  name: string;
}

interface UserState {
  constName: string;
}
function User({ name }: UserProps) {
  const [constName] = useState(name);

  useEffect(() => {
    console.log('DID MOUNT', name);

    return () => {
      console.log('WILL UNMOUNT', name);
    };
  }, []);

  useEffect(() => {
    console.log('DID UPDATE', name);
  }, [name]);

  return (
    <span>
      {name} : {constName}
    </span>
  );
}

export default memo(User);

// export default class User extends PureComponent<UserProps, UserState> {
//   constructor(props: UserProps) {
//     super(props);

//     this.state = {
//       constName: this.props.name,
//     };
//   }

//   componentDidMount(): void {
//     console.log('DID MOUNT', this.props.name);
//   }

//   componentDidUpdate(
//     prevProps: Readonly<UserProps>,
//     prevState: Readonly<{}>,
//     snapshot?: any
//   ): void {
//     console.log('DID UPDATE', prevProps.name, '->', this.props.name);
//   }

//   componentWillUnmount(): void {
//     console.log('WILL UNMOUNT', this.props.name);
//   }

//   render(): ReactNode {
//     return (
//       <span>
//         {this.props.name} : {this.state.constName}
//       </span>
//     );
//   }
// }
