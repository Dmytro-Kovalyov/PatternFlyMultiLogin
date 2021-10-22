import React from 'react';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import { Select, SelectOption, SelectVariant, SelectDirection} from '@patternfly/react-core';

class SelectLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      <SelectOption key={0} value="English" />,
      <SelectOption key={1} value="Українська" />,
    ];

    this.state = {
      isToggleIcon: false,
      isOpen: false,
      selected: null,
      isDisabled: false,
      direction: SelectDirection.down
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
        this.props.onSelect(event, selection, isPlaceholder);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };

    this.toggleDisabled = checked => {
      this.setState({
        isDisabled: checked
      });
    };

    this.setIcon = checked => {
      this.setState({
        isToggleIcon: checked
      });
    };

    this.toggleDirection = () => {
      if (this.state.direction === SelectDirection.up) {
        this.setState({
          direction: SelectDirection.down
        });
      } else {
        this.setState({
          direction: SelectDirection.up
        });
      }
    };
  }

  render() {
    const { isOpen, selected, isDisabled, direction, isToggleIcon } = this.state;
    const titleId = 'title-id-1';
    return (
        <Select
        toggleIcon={isToggleIcon && <CubeIcon />}
        variant={SelectVariant.single}
        aria-label="Select Input"
        onToggle={this.onToggle}
        onSelect={this.onSelect}
        selections={selected}
        isOpen={isOpen}
        aria-labelledby={titleId}
        isDisabled={isDisabled}
        direction={direction}
      >
        {this.options}
      </Select>
    );
  }
}

export {SelectLanguage}