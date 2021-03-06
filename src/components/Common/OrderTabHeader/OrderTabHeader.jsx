import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import FontAwesome from 'react-fontawesome';
import { Button } from 'components';
import styles from './OrderTabHeader.scss';

class OrderTabHeader extends Component {
  render() {
    const {
      location,
      locationLabel,
      primaryButtonText,
      secondaryButtonText,
      children
    } = this.props;

    return (
      <div>
        <Row middle="xs" className={ styles.row }>
          <Col lg className={ styles.header }>
            { locationLabel }: { location }
          </Col>
          <Col lg className={ styles.buttons }>
            { primaryButtonText &&
              <Button
                className={ styles.button }
                // onClick={ onClick }
              >
                <FontAwesome
                  className="fa-th"
                  name="fa-th"
                />
                { primaryButtonText }
              </Button>
            }
            { secondaryButtonText &&
              <Button
                className={ styles.button }
                // onClick={ onClick }
              >
                <FontAwesome
                  className="fa-th"
                  name="fa-th"
                />
                { secondaryButtonText }
              </Button>
            }
          </Col>
        </Row>
        { children }
      </div>
    );
  }
}

OrderTabHeader.propTypes = {
  location: PropTypes.string,
  locationLabel: PropTypes.string,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  children: PropTypes.node,
};

export default OrderTabHeader;
