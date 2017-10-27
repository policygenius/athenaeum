import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { generate } from 'shortid';
import {
  Layout,
  Col,
  StyledWrapper,
  Text,
  Icon,
  Spacer,
  List,
  Hide,
  LinkWrapper,
} from 'athenaeum';

const Resource = (props) => {
  const {
    collapsed,
    icon,
    onClick,
    resources,
  } = props;

  const resourceClasses = [
    'resources-list',
    collapsed && 'collapsed-resources',
  ];

  return (
    <Col className="resource-group">
      <div onClick={onClick} role="presentation">
        <Text
          type={7}
          font="a"
        >
          { resources.header }
          <Icon
            icon={icon}
            height="8px"
            width="24px"
            inline="right"
            className="icon"
          />
        </Text>
      </div>
      <Spacer size={12} />
      <List bottomSpacing={18} noBullets className={classnames(...resourceClasses)}>
        {
          resources.items.map(resource =>
            (<LinkWrapper
              key={`resource-${generate()}`}
              color="neutral-1"
              href={resource.href}
            >
              <Text
                type={10}
                font="b"
              >
                { resource.title }
              </Text>
            </LinkWrapper>)
          )
        }
      </List>
      <Spacer size={18} />
      <Hide hideOn="small"><Spacer size={60} /></Hide>
    </Col>
  );
};

Resource.propTypes = {
  collapsed: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  resources: PropTypes.object
};

export default Resource;

