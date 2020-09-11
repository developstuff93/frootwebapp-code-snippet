/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { numericSaveRequest } from 'redux-base/actions';
import { Row, Col } from 'react-flexbox-grid';
import { FormInput, PageHeader, Controls } from 'components';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { form } from 'styles/common.scss';

const mapStateToProps = state => ({
  errorMessage: state.numeric.errorMessage
});

const mapDispatchToProps = { numericSaveRequest };

const reduxFormConfig = {
  form: 'numericPageForm',
  // validate: NumericsFormValidation
};

class NumerationFormatsPage extends Component {
  handleSave = (values) => {
    this.props.numericSaveRequest({
      payload: values
    });
  }

  render() {

    const { errorMessage, handleSubmit } = this.props;

    return (
      <div>
        <PageHeader
          bigText="Adamant and Co. Ltd - Numeration Formats"
        />
        <form
          className={ form }
          onSubmit={ handleSubmit(this.handleSave) }
        >
          <Row middle="xs" center="xs">
            <Col>
              <label>Customer Quotation/Estimate</label>
            </Col>
            <Col xs={ 4 }>
              <Field
                name="quotation"
                placeholder="QU0001"
                type="text"
                component={ FormInput }
              />
            </Col>
          </Row>
          <Row middle="xs" center="xs">
            <Col>
              <label>Sales Orders</label>
            </Col>
            <Col xs={ 4 }>
              <Field
                name="sales"
                placeholder="SQ0001"
                type="text"
                component={ FormInput }
              />
            </Col>
          </Row>
          <Row middle="xs" center="xs">
            <Col>
              <label>Customer Invoices</label>
            </Col>
            <Col xs={ 4 }>
              <Field
                name="invoices"
                placeholder="INV0001"
                type="text"
                component={ FormInput }
              />
            </Col>
          </Row>
          <Row middle="xs" center="xs">
            <Col>
              <label>Shipments</label>
            </Col>
            <Col xs={ 4 }>
              <Field
                name="shipments"
                placeholder="SHP0001"
                type="text"
                component={ FormInput }
              />
            </Col>
          </Row>
          <Row middle="xs" center="xs">
            <Col>
              <label>Purchase Orders</label>
            </Col>
            <Col xs={ 4 }>
              <Field
                name="purchase"
                placeholder="PO0001"
                type="text"
                component={ FormInput }
              />
            </Col>
          </Row>
          <Row middle="xs" center="xs">
            <Col>
              <label>Goods Received Note</label>
            </Col>
            <Col xs={ 4 }>
              <Field
                name="note"
                placeholder="GRN0001"
                type="text"
                component={ FormInput }
              />
            </Col>
          </Row>
          <div>{ errorMessage }</div>
          <Controls submit />
        </form>
      </div>
    );
  }
}

NumerationFormatsPage.propTypes = {
  errorMessage: PropTypes.string,
  numericSaveRequest: PropTypes.func.isRequired,
  // redux-form related props
  handleSubmit: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConfig)(NumerationFormatsPage));
