import { useState } from 'react';
import classNames from 'classnames';
import { InputField } from '@vendor/components/commons/Utilities';

const Newsletter = ({ className }) => {
  const [email, setEmail] = useState('');

  const handleChange = (value) => {
    setEmail(value);
  };

  return (
    <>
      <div className={classNames("newsletter", className)}>
        <div className={"newsletter_wrapper"}>
          <h3 className={"newsletter_title"}>JOIN OUR EMAIL LIST!</h3>
          <div className={"newsletter_content"}>
            <form>
              <InputField
                type={'email'}
                placeholder={'Email Address'}
                name={'newsletter'}
                id={'newsletter'}
                value={email}
                onChange={handleChange}
              />
            </form>
            <p className={"newsletter_caption"}>
              Subscribe to receive new product releases, exclusive discount codes, and newsletters By
              signing up, you are consenting to our privacy policy but you can opt out at any time.
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
