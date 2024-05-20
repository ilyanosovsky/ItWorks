import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import InputField from '../components/InputField';
import { useAppDispatch, useAppSelector } from '../store';
import { updateUser, setCurrentUserById } from '../store/slices/users';

const EditUserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) =>
    state.users.users.find((user) => user.id === id)
  );
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      console.log('Setting current user by ID:', id);
      dispatch(setCurrentUserById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (user) {
      console.log('User data fetched:', user);
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: '',
        dob: user.dob || '',
      });
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName) newErrors.firstName = t('editUser.error.firstName');
    if (!formData.lastName) newErrors.lastName = t('editUser.error.lastName');
    if (!formData.email) {
      newErrors.email = t('editUser.error.emailRequired');
    } else if (!formData.email.includes('@')) {
      newErrors.email = t('editUser.error.emailInvalid');
    }
    if (!formData.password) {
      newErrors.password = t('editUser.error.passwordRequired');
    } else if (formData.password.length < 6) {
      newErrors.password = t('editUser.error.passwordLength');
    }
    if (!formData.dob) newErrors.dob = t('editUser.error.dob');

    if (Object.keys(newErrors).length > 0) {
      console.log('Validation errors:', newErrors);
      setErrors(newErrors);
      return;
    }

    if (id) {
      console.log('Dispatching updateUser action with data:', { ...formData, id });
      dispatch(updateUser({ ...formData, id }));
    } else {
      setErrors({ general: t('editUser.error.userId') });
      console.log('Error: User ID is missing');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log('Form input changed:', name, value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-darkBackground">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-darkCard p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 text-gray-900 dark:text-darkText">{t('editUser.title')}</h2>
        <InputField label={t('editUser.firstName')} type="text" value={formData.firstName} name="firstName" onChange={handleInputChange} error={errors.firstName} />
        <InputField label={t('editUser.lastName')} type="text" value={formData.lastName} name="lastName" onChange={handleInputChange} error={errors.lastName} />
        <InputField label={t('editUser.email')} type="email" value={formData.email} name="email" onChange={handleInputChange} error={errors.email} />
        <InputField label={t('editUser.password')} type="password" value={formData.password} name="password" onChange={handleInputChange} error={errors.password} />
        <InputField label={t('editUser.dob')} type="date" value={formData.dob} name="dob" onChange={handleInputChange} error={errors.dob} />
        {errors.general && <div className="text-red-500 mb-4">{errors.general}</div>}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          {t('editUser.updateButton')}
        </button>
      </form>
    </div>
  );
};

export default EditUserPage;
