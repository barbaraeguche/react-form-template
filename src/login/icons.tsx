import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import React from "react";

export const MailIcon: React.FC = () => <FontAwesomeIcon icon={faEnvelope}/>;
export const PadlockIcon: React.FC = () => <FontAwesomeIcon icon={faLock}/>;