import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import {
  Select,
  Accordion,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Form,
  Grommet,
  TextInput,
  FormField,
  grommet,
  ResponsiveContext,
} from 'grommet';
import { deepMerge } from 'grommet/utils';

import {
  writeName,
  writeDescription,
  selectTopic,
  addCollection,
  getTopics,
  getCollections,
} from './actions';

import CustomCard from '../../Layout/Card/Card';

const customTheme = deepMerge(grommet, {
  formField: {
    border: {
      color: 'border',
      side: 'all',
    },
    label: {
      size: 'xsmall',
      color: 'text-weak',
      margin: {
        horizontal: 'none',
      },
    },
    round: '2px',
  },
});

const mapStateToProps = (state) => ({
  name: state.collection.name,
  description: state.collection.description,
  email: state.user.user.email,
  id: state.user.user.id,
  topic: state.collection.topic,
  topics: state.collection.topics,
  collections: state.collection.collections,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeHandlerName: (e) => dispatch(writeName(e.target.value)),
  onChangeHandlerDescription: (e) => dispatch(writeDescription(e.target.value)),
  onSelectHandlerTopic: (e) => dispatch(selectTopic(e.target.value)),
  storeTopics: (topics) => dispatch(getTopics(topics)),
  storeCollections: (collections) => dispatch(getCollections(collections)),
  onSubmitHandlerCollection: (collectionData) =>
    dispatch(addCollection(collectionData)),
});

function Personal({
  email,
  id,
  name,
  description,
  topic,
  topics,
  storeTopics,
  storeCollections,
  collections,
  onChangeHandlerName,
  onChangeHandlerDescription,
  onSelectHandlerTopic,
  onSubmitHandlerCollection,
}) {
  const size = React.useContext(ResponsiveContext);

  useEffect(() => {
    (async () => {
      try {
        const [optionsRes, collectionsRes] = await Promise.all([
          fetch('http://localhost:8000/topics'),
          fetch(`http://localhost:8000/collections/${id}`),
        ]);
        const options = await optionsRes.json();
        const collections = await collectionsRes.json();
        const topics = options.map((option) => option.topic);
        storeTopics(topics);
        storeCollections(collections);
      } catch (err) {
        throw err;
      }
    })();
  }, [storeTopics, storeCollections, id]);

  return (
    <Box
      direction="column"
      justify="center"
      align="center"
      width="100%"
      background="light-2"
      pad="medium"
    >
      <Accordion>
        <Box width="medium">
          <AccordionPanel label="Add a collection">
            <Grommet theme={customTheme}>
              <Box
                height="100%"
                background="light-2"
                align="center"
                pad={{ vertical: 'large' }}
              >
                <Heading size="medium" level="3">
                  New Collection
                </Heading>
                <Form>
                  <Box align="center">
                    <Box
                      responsive
                      border
                      gap="medium"
                      pad="large"
                      width="80%"
                      background="light-1"
                    >
                      <FormField htmlFor="name" name="name" label="Name">
                        <TextInput
                          value={name}
                          onChange={onChangeHandlerName}
                          id="name"
                          name="name"
                          placeholder="Enter a name of a collection"
                        />
                      </FormField>
                      <FormField
                        htmlFor="description"
                        name="description"
                        label="Description"
                      >
                        <TextInput
                          value={description}
                          onChange={onChangeHandlerDescription}
                          id="description"
                          name="description"
                          placeholder="Enter a description of a collection"
                        />
                      </FormField>
                      <Select
                        placeholder="select a topic"
                        options={topics}
                        value={topic}
                        onChange={onSelectHandlerTopic}
                      />
                      <Box direction="row" justify="center" gap="medium">
                        <Button
                          onClick={() => {
                            onSubmitHandlerCollection({
                              name,
                              description,
                              topic,
                              email,
                              id,
                            });
                            console.log(id);
                          }}
                          type="submit"
                          primary
                          label="Add a collection"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Form>
              </Box>
            </Grommet>
          </AccordionPanel>
        </Box>
      </Accordion>
      <Heading size="large" level="1">
        Collections
      </Heading>
      <Box
        gap="xlarge"
        fill
        direction={size === 'small' ? 'column' : 'row'}
        pad={size === 'small' ? 'large' : 'small'}
      >
        {collections.map((_, id) => (
          <CustomCard height="small" basis="1/3" key={id} />
        ))}
      </Box>
    </Box>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
