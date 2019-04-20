import React from 'react';

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageYOffset: 0
    };
  }

  handleScroll = () => {
    this.setState({
      pageYOffset: window.pageYOffset
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  renderChildren() {
    var children = React.Children.map(this.props.children, child => {
      const clonedChild = React.cloneElement(child, {
        style: {
          backgroundColor: 'rgba(26, 188, 156, 0.8)',
          width: '100%',
          height: '100%',
          position: 'relative',
          zIndex: 1,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
        }
      });

      return clonedChild;
    });

    return children;
  }

  render() {
    const { component: Component, backgroundImage, ...props } = this.props;
    let position = this.state.pageYOffset / 2 + 'px';

    return (
      <Component
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: '600px',
          backgroundColor: 'rgb(26, 188, 156)',
          backgroundPosition: `62% -${position}`
        }}
        {...props}
      >
        {this.renderChildren()}
      </Component>
    );
  }
}

export default Parallax;
