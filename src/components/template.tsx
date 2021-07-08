import React from 'react';
import './template.scss';

import { Panel } from "azure-devops-ui/Panel";
import { TextField } from "azure-devops-ui/TextField";

import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
import { TestImages } from '@fluentui/example-data';
import { Dropdown } from "azure-devops-ui/Dropdown";
import { Checkbox } from "azure-devops-ui/Checkbox";


export interface ITemplateProps {
  show: boolean;
  onDismiss: any;
}

const options: IChoiceGroupOption[] = [
  {
    key: 'bar',
    imageSrc: TestImages.choiceGroupBarUnselected,
    imageAlt: 'Bar chart icon',
    selectedImageSrc: TestImages.choiceGroupBarSelected,
    imageSize: { width: 32, height: 32 },
    text: 'MongoDB', // This text is long to show text wrapping.
  },
  {
    key: 'pie',
    imageSrc: TestImages.choiceGroupBarUnselected,
    selectedImageSrc: TestImages.choiceGroupBarSelected,
    imageSize: { width: 32, height: 32 },
    text: 'SQLServer',
  },
];

interface ITemplateState {

}

class Template extends React.Component<ITemplateProps, ITemplateState>  {

  constructor(props: ITemplateProps) {
    super(props);
    this.state = {

    };
  }

  render() {

    if (this.props.show) {
      return (
        <Panel
          onDismiss={this.props.onDismiss}
          titleProps={{ text: "Create new project" }}
          description={
            "Create new project repository configuration for template generation."
          }
          footerButtonProps={[
            { text: "Cancel", onClick: this.props.onDismiss },
            { text: "Save", primary: true }
          ]}>

          <div className="template--content">
            <div className="template--group">
              <TextField
                label="Name *"
                required={true}
                placeholder="Name your template name"
              />
            </div>

            <div className="template--group">

              <Dropdown
                ariaLabel="Basic"
                className="example-dropdown"
                placeholder="Select a type"
                items={[
                  { id: "item1", text: "Item 1" },
                  { id: "item2", text: "Item 2" },
                  { id: "item3", text: "Item 3" }
                ]}
              />
            </div>

            <div className="template--group">
              <label className="template--group-label">
                Data base
              </label>
              <ChoiceGroup
                defaultSelectedKey="bar"
                options={options}
              />
            </div>

            <div className="template--group">
              <label className="template--group-label">
                Options
              </label>
              <div className="rhythm-vertical-8 flex-column">
                <Checkbox
                  label="Job (Hangfire)"
                />
                <Checkbox
                  label="Cache (Redis)"
                />
                <Checkbox
                  label="Resilience (Polly)"
                />
              </div>
            </div>

            <div className="template--group">
              <label className="template--group-label">
                Generate
              </label>
              <div className="rhythm-vertical-8 flex-column">
                <Checkbox
                  label="Repo"
                />
                <Checkbox
                  label="Pipeline"
                />
                <Checkbox
                  label="Dev Env"
                />
              </div>
            </div>










          </div>

        </Panel>
      );
    }
    return null;
  }
}



export default Template;
